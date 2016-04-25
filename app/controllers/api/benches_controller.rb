class Api::BenchesController < ApplicationController
  def index
    # @benches = Bench.all #See Back End Prep in Phase 6
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
  end
end
