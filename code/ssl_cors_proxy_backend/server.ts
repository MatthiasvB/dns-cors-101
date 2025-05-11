Deno.serve(
  { port: 3000, hostname: "0.0.0.0" },
  async (req: Request): Promise<Response> => {
    const { method, url } = req;

    const double = async (sendHeaders = false) => {
      try {
        const body = await req.json();
        console.log(body);
        const input = Number(body.num);

        if (isNaN(input)) {
          return new Response(JSON.stringify({ error: "Invalid number" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const result = input * 2;
        return new Response(JSON.stringify({ result }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...(sendHeaders
              ? {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "POST, OPTIONS",
                  "Access-Control-Allow-Headers": "*",
                }
              : null),
          },
        });
      } catch (_) {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    };

    if (method === "POST" && new URL(req.url).pathname === "/double") {
      return double();
    }

    if (
      method === "POST" &&
      new URL(req.url).pathname === "/double-with-stupid-cors"
    ) {
      return double(true);
    }

    if (
      method === "OPTIONS" &&
      new URL(req.url).pathname === "/double-with-stupid-cors"
    ) {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }

    if (method === "GET") {
      return new Response(
        "Backend here! I exist! I run! I can double numbers!",
        {
          status: 200,
          headers: { "Content-Type": "text/plain" },
        }
      );
    }

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
);
