<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  const uglyHostname = "xn--vorfhreffekt-glb.de";
  function isHttps() {
    return location.protocol === "https:";
  }
  function getProtocol() {
    return isHttps() ? "https" : "http";
  }
  function backendUrl() {
    switch (location.hostname) {
      case "frontend.vorführeffekt.de":
      case `frontend.${uglyHostname}`:
        return `${getProtocol()}://backend.vorführeffekt.de`;
      case "localhost":
        return "http://localhost:3000";
      case "vorführeffekt.de":
      default:
        return `${getProtocol()}://vorführeffekt.de:3000`;
    }
  }

  function isDirectAccess() {
    console.log(location.hostname);
    switch (location.hostname) {
      case "localhost":
      case "vorführeffekt.de":
      case uglyHostname:
        return true;
      default:
        return false;
    }
  }

  let useCorsUrl = $state(false)
  let doubleEndpoint = $derived(useCorsUrl ? "double-with-stupid-cors" : "double");

  let num = $state(14);
  // fetch twice the number from the backend (POST /double/:num)
  // const twiceNum = (num: number) => {
  //   return fetch(`${backendUrl()}/${doubleEndpoint}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ num }),
  //   }).then((res) => res.json());
  $effect(() => {
    console.log("useCorsUrl", useCorsUrl);
    console.log("doubleEndpoint", doubleEndpoint);
    console.log("backendUrl", backendUrl());
  });

    const twiceNum = $derived(fetch(`${backendUrl()}/${doubleEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num }),
      }).then((res) => {
        console.log("getting")
        return res.json() as Promise<{ result: number}> ;
      })
    );
</script>

<main>
  <h1>CORS and SSL 101</h1>
  <p>
    Connected to frontend server via {#if isHttps()}<span class="secure"
        >secure HTTPS</span
      >{:else}<span class="insecure">insecure HTTP</span>{/if}
  </p>
  <p>
    Calculating the double of <input class="input inline w-30" type="number" bind:value={num}/> via backend. It is:
    {#await twiceNum}
      ...Loading
    {:then number}
      <span>{number.result}!</span>
    {:catch error}
      <span class="failed">
        Unknown, because communication to backend failed. Possibly a CORS issue? Or maybe the backend is using a self-signed certificate, which leads the browser to simply silently <em>not connect</em>?!
      </span>
    {/await}
  </p>
  {#if isDirectAccess()}
  <div style="height:20px;"></div>
  <!-- A switch to enable the fake cors url -->
  <label>
    <input type="checkbox" bind:checked={useCorsUrl} />
    Use fake CORS URL
  </label>
  {/if}
</main>

<style>
  .secure {
    color: green;
  }
  .insecure {
    color: red;
  }
  .failed {
    color: purple;
  }
</style>
