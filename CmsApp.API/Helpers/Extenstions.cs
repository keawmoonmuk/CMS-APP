using Microsoft.AspNetCore.Http;

namespace CmsApp.API.Helpers

{
    public static class Extenstions
    {
        //AddApplication Error
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Appcation-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}