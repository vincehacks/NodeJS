/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 11 - Enabling CORS
 * 
 * Start a static http-server in the lp-store-ui directory. This will serve a
 * store user interface on http://localhost:8080
 * 
 * Open that page in your browser: The store is empty. That’s because CORS
 * isn’t enabled in our Express server.
 * 
 * Your mission: Using the web server we wrote during lab #2, change the config
 * to enable CORS. Then you should be able to see data in our store after
 * refreshing http://localhost:8080
 * 
 * Note: CORS is required because localhost:8000 and localhost:8080 are
 * different origins, even though they are two servers running on the same
 * physical machine.
 *****************************************************************************/