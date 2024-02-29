import React from 'react'
import ReactDOM from 'react-dom/client'
function MyApp(){
  return (
    <h1>Zia!!!!!!!</h1>
  )
}
const anotherdust = (
  <a href='http://google.com' target='-blank'>Visit Googel</a>
) 
const ReactElement = React.createElement(
  "a",
  {href:'http://youtube.com' , target:'_blank'},
  'click to vist youtube city'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
<App />
)
