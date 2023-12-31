defmodule TimeManagerWeb.Router do
  use TimeManagerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", TimeManagerWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
    resources "/workingTimes", WorkingTimeController, only: [:update, :delete]
    get "/workingTimes/:userID/:id", WorkingTimeController, :show
    get "/workingTimes/:userID", WorkingTimeController, :index
    post "/workingTimes/:userID", WorkingTimeController, :create
    get "/clocks/:userID", ClockController, :show
    post "/clocks/:userID", ClockController, :create
  end

  scope "/api/swagger" do
    forward "/", PhoenixSwagger.Plug.SwaggerUI, otp_app: :timeManager, swagger_file: "swagger.json"
  end

  def swagger_info do
    %{
      schemes: ["http", "https", "ws", "wss"],
      info: %{
        version: "1.0",
        title: "MyAAZPI",
        description: "API Documentation for MyAPI v1",
        termsOfService: "Open for public",
        contact: %{
          name: "Vladimir Gorej",
          email: "vladimir.gore@gmail.com"
        }
      },
      securityDefinitions: %{
        Bearer: %{
          type: "apiKey",
          name: "Authorization",
          description:
            "API Token must be provided via `Authorization: Bearer ` header",
          in: "header"
        }
      },
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [
        %{name: "Users", description: "User resources"},
      ]
    }
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:timeManager, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: TimeManagerWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
