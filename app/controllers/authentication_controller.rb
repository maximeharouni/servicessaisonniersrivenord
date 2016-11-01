class AuthenticationController < ApplicationController
  def authenticate
    @user = User.find_by(email: params[:email])
    if @user.valid_password?(params[:password])
      render json: payload(@user)
    else
      render json: { errors: ['Invalid Username or Password'] }, status: :unauthorized
    end
  end

  # TODO: Send confirmation email
  def register
    
  end

  private
  def payload(user)
    return nil unless user and user.id
    {
      jwt: JsonWebToken.encode({ user: { id: user.id, email: user.email } })
    }
  end
end
