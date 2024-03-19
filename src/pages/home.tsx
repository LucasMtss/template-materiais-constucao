import { useRef } from 'react';
import { Header } from '../components/header'
import { Product } from '../components/product'
import { useCart } from '../hooks/useCart';
import {MENU} from '../utils/data/products'

export function Home() {
  const {numberOfItems} = useCart();

   // Referência para a div da seção
   const sectionRefs = useRef([]);

   // Função para lidar com o clique no botão e rolar para a seção correspondente
   const scrollToSection = (index: number) => {
     sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
   };

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <Header title='Escolha seu pedido' cartQuatityItems={numberOfItems}/>
      <div className='flex gap-2 items-center pl-5 overflow-x-scroll pb-2'>
        {
          MENU.map((section, index) => {
            return (
             <button key={index}
             onClick={() => scrollToSection(index)} className='min-w-[200px] bg-transparent border text-green-600 border-green-600 px-4 py-2 rounded-md hover:bg-green-600 hover:text-slate-100'>{section.title}</button>
            )
          })
        }
      </div>
      {
        MENU.map((section, index) => {
          return (
            <div key={index} className='w-full pl-5' ref={(ref) => (sectionRefs.current[index] = ref)}>
              <h4 className='text-slate-900 text-xl font-bold mb-3'>{section.title}</h4>
              {
                section.data.map(product => {
                  return <Product data={product}/>
                })
              }
            </div>
          )
        })
      }
      
    </div>
  )
}