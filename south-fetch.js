// Serve the verified South Alabama weekly data locally so the app does not depend on a missing Storage object.
const __rbFetch=window.fetch.bind(window);
window.fetch=(input,init)=>{
  const u=typeof input==='string'?input:(input&&input.url)||'';
  if(/South%20Alabama|South Alabama|play_feed-109|south-alabama-play-feed/i.test(u)){
    return Promise.resolve(new Response(window.SA_CSV||'',{status:200,headers:{'Content-Type':'text/csv; charset=utf-8','Cache-Control':'no-store'}}));
  }
  return __rbFetch(input,init);
};
