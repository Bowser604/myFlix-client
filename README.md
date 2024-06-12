In this task I learnt building tools to build myFlix app setting up my Flix-client directory with relevant files and the use of Parcel for operations.

Initializing package.json in myFlix-client folder command: 
"npm init" 

In code editor created new ".gitignore" file with: 
node_modules
.cache
.parcel-cache

Terminal entered: 
npm install -g parcel

Inside the “myFlix-client” project folder in terminal, run the commands to install packages and dependencies needed for React app development:
npm install --save react react-dom

Main files for client-side JavaScript, your CSS, and your HTML. Files will be hosted in a new “src” folder in the new “myFlix-client” directory.

1. The “myFlix-client/src/index.jsx” file.
   
import { createRoot } from 'react-dom/client';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);


2. The “myFlix-client/src/index.scss” file.
   
$color: steelblue;

.my-flix {
  color: $color;
}


3. The “myFlix-client/src/index.html” file.

<!DOCTYPE html>
<html>
  <head>
    <title>myFlix</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.jsx"></script>
  </body>
</html>

Building an App. Instruct Parcel to build my project:
In “myFlix-client” folder use the following terminal command:

parcel [path to index.html]

replace [path to index.html] 
parcel src/index.html

should see three new files:

The “.js” file
The “.css” file
The “.map” file
