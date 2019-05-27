let createType = null
switch(contentType) {
    case "post": 
        createType = () => console.log('Creating a post')
        break;
    case "video":
        createType = () => console.log("Creating a post")
        break;
    default:
        createType = () => console.log("Unknown type")
}

createType()

// Object literal
const contentTypes = {
    post: () => console.log('Creating a post'),
    video: () => console.log('Creating a video'),
    default: () => console.log('Unknown type')
}

const createType = contentTypes[contentType] || contentTypes['default']
createType()