import ComponentList from '@/components/ComponentsList'

import { Library } from '@/__mock__/dataModel'

const addBigData = (categories, components) => {
  for (let i = 0; i < categories; i++) {
    console.log(i);
    Library.Categories.push('Category' + i);
  }

  for (let i = 0; i < components; i++) {
    Library.Components.push({
      Name: 'Comp' + i,
      Categories: ['Category' + (i % categories), 'Category' + ((i + 1) % categories)],
    });
  }
}

addBigData(30, 10000);

function App() {

  return (
    <ComponentList data={Library} />
  )
}

export default App
