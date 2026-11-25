class Public::MapsController < Public::ApplicationController
  
  def show
    @regions = Region.order(:id)
  end
end
