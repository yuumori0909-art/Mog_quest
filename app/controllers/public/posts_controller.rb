class Public::PostsController < Public::ApplicationController

  def new
    @post = Post.new
    set_form_options
  end

  def create
    @post = Post.new(post_params)
    @post.user = Current.user

    tag_names = Array(params.dig(:post, :tag_names))
    tag_names = tag_names.map(&:strip).reject(&:blank?).uniq
    
    if tag_names.any?{|name| name.length > 20}
      @post.errors.add(:base,"タグを20文字以内に修正してください")
      set_form_options
      render :new, status: :unprocessable_entity
      return
    end

    if @post.save

      tags = tag_names.map do |name|
        Tag.find_or_create_by!(name: name)
      end
      @post.tags = tags

      redirect_to post_path(@post), notice:"グルメ冒険を記録しました！！"
    else
      set_form_options
      render :new, status: :unprocessable_entity
    end
  end    

  
  
  
  private

  def post_params
    params.require(:post).permit(
      :name, :genre, :access, :description, :shipping_available, :prefecture_id,
      :taste_rating, :price_rating, :repeat_rating, :overall_rating, photos: []
    )
  end  

  def set_form_options
    @regions = Region.order(:id)
    @selected_region_id = params[:region_id].presence || @post.prefecture&.region_id

    @prefectures = 
      if @selected_region_id.present?
        Prefecture.where(region_id: @selected_region_id).order(:code)
      else
        Prefecture.none
      end 
  end

end
