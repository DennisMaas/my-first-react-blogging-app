import React from 'react';
import './App.css';
import BlogEntry from "./components/BlogEntry";

function App() {
  const blogEntryData = {
    id: "1",
    title: "my first title",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. " +
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. " +
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. " +
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. " +
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. "+
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
    image: "/img/code_quality.png"
  }
  const blogEntryData2 = {
    id: "2",
    title: "my second title",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. " +
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
    image: "/img/giphypizzadownload.gif"
  }
  const blogEntryData3 = {
    id: "3",
    title: "my third title",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. " +
        "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. " +
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. " +
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. " +
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, " +
        "viverra quis, feugiat a, tellus. " +
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
    image: "/img/4f828d05f82b8b7aedfe8be6a7d9d2a3.png"
  }


  return (
    <div className="App">
    <BlogEntry blogEntryData={blogEntryData}/>
    <BlogEntry blogEntryData={blogEntryData2}/>
    <BlogEntry blogEntryData={blogEntryData3}/>
    </div>
  );
}

export default App;
