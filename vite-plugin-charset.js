export default function CharsetPlugin() {
    return {
      name: 'vite-plugin-charset',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const contentType = res.getHeader('Content-Type');
  
          if (typeof contentType === 'string' && contentType.includes('text/javascript')) {
            res.setHeader('Content-Type', `${contentType}; charset=utf-8`);
          }
  
          next();
        });
      },
    };
  }
  