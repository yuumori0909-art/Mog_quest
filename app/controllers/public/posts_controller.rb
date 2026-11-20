class Public::PostsController < Public::ApplicationController

  def new
    @post = Post.new
    @regions = Region.order(:id)
    @selected_region_id = params[:region_id]

    @prefectures = 
      if @selected_region_id.present?
        Prefecture.where(region_id: @selected_region_id).order(:code)
      else
        Prefecture.none
      end    
  end
end
