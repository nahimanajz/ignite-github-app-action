
import Route from "@ioc:Adonis/Core/Route";


Route.group(() => {
  Route.get("/repositories", "GithubsController.index");
  // TODO:// Authorize by credentials based on github app: middleware can handle that
}).prefix("/api/v1/user");

