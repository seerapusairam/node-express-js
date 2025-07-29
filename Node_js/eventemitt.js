// const evenEmitter = require('events')

// const custom = new evenEmitter()

// custom.on('done',()=>{
//     console.log(`hey!!`)
// })

// custom.on('done',(name,age)=>{
//     console.log(`hey!! ${name} and ${age}`)
// })

// custom.emit('done',"sai",32)

const EventEmitter = require('events');

class FileUploader extends EventEmitter {
  upload(file) {
    console.log(`Starting upload for ${file}`);

    // Emit "start"
    this.emit('start', file);

    let progress = 0;

    const interval = setInterval(() => {
      progress += 20;

      // Emit "progress"
      this.emit('progress', progress);

      if (progress === 100) {
        clearInterval(interval);
        
        // Emit "done"
        this.emit('done', `${file} uploaded successfully!`);
      }
    }, 1000);
  }
}

// Usage
const uploader = new FileUploader();

// Register listeners
uploader.on('start', (file) => console.log(`Upload started: ${file}`));
uploader.on('progress', (percent) => console.log(`Progress: ${percent}%`));
uploader.on('done', (message) => console.log(message));

// Start upload
uploader.upload('myfile.txt');