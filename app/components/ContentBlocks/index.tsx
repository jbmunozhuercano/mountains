import {JSX} from 'react';
import ContentBlock from '../ContentBlock';

const blocks = [
  {
    key: crypto.randomUUID(),
    id: 'origin',
    imgSrc: '/img/origen.jpg',
    altText: 'Origen extraordinario - Mountains',
    title: (
      <>
        Origen
        <span className='font-bold [color:#1ea9d5] block'>Extraordinario</span>
      </>
    ),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate risus, eget iaculis sem. Cras sollicitudin maximus arcu et viverra. Integer posuere nibh sapien, vitae semper nulla ultricies vitae. Quisque sapien arcu, lacinia eget fermentum vitae, aliquet quis sem. Nunc quam purus, vulputate et pharetra sit amet, faucibus ac nisl. Donec convallis blandit arcu eget bibendum. Mauris sollicitudin mattis metus, sed auctor nibh.'
  },
  {
    key: crypto.randomUUID(),
    id: 'culture',
    imgSrc: '/img/cultura.jpg',
    altText: 'Cultura única - Mountains',
    title: (
      <>
        Cultura
        <span className='font-bold [color:#d54a1e] block'>Única</span>
      </>
    ),
    text: 'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent id congue risus. Suspendisse at velit sed risus tempor pretium ut vitae mauris. Integer in libero sit amet neque gravida posuere fermentum vel sem. Fusce id mollis orci. Praesent velit orci, hendrerit vitae volutpat dapibus, vulputate vitae ligula. Quisque vestibulum neque quis nisl viverra, ut semper est tristique.'
  },
  {
    key: crypto.randomUUID(),
    id: 'sostenible',
    imgSrc: '/img/sostenible.jpg',
    altText: 'Sostenible - Mountains',
    title: (
      <>
        <span className='font-bold [color:#1ea9d5]'>Sos</span>tenible
      </>
    ),
    text: 'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent id congue risus. Suspendisse at velit sed risus tempor pretium ut vitae mauris. Integer in libero sit amet neque gravida posuere fermentum vel sem. Fusce id mollis orci. Praesent velit orci, hendrerit vitae volutpat dapibus, vulputate vitae ligula. Quisque vestibulum neque quis nisl viverra, ut semper est tristique. Aliquam efficitur dolor at efficitur volutpat. Quisque quis maximus urna. Aenean facilisis malesuada maximus.'
  }
];

export default function ContentBlocks(): JSX.Element {
  return (
    <>
      {blocks.map(block => (
        <ContentBlock key={block.key} block={block} />
      ))}
    </>
  );
}
