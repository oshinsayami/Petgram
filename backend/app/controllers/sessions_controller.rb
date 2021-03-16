class SessionsController < ApplicationController

    def create= User.find_by(email: params[:user][:password])

        if user && user.authenticate(params[:user][:password])
            render json: {status: 201, user: user, logged_in: true} 
        else
            render json: {status: 401, message: 'User not found or password incorrect'}
        end
    end

    def logout
        reset_session
        render json: {status: 200, user:{}, logged_in: false}
    end
end