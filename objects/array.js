const err = JSON.stringify([
    Error: No node found for selector: #SRCH
        at Object.assert (/Users/manju/Codes/pickles/ams-services/node_modules/puppeteer/lib/helper.js:29:15)
        at DOMWorld.click (/Users/manju/Codes/pickles/ams-services/node_modules/puppeteer/lib/DOMWorld.js:260:18)
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
        at async /Users/manju/Codes/pickles/ams-services/services/scrapper.service.js:88:5
        at async Service.scrap (/Users/manju/Codes/pickles/ams-services/services/scrapper.service.js:58:19)
        at async Promise.all (index 0)
      -- ASYNC --
        at Frame.<anonymous> (/Users/manju/Codes/pickles/ams-services/node_modules/puppeteer/lib/helper.js:94:19)
        at Page.click (/Users/manju/Codes/pickles/ams-services/node_modules/puppeteer/lib/Page.js:778:33)
        at /Users/manju/Codes/pickles/ams-services/services/scrapper.service.js:88:16
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
        at async Service.scrap (/Users/manju/Codes/pickles/ams-services/services/scrapper.service.js:58:19)
        at async Promise.all (index 0)
  ]);

  console.log(err.toString());