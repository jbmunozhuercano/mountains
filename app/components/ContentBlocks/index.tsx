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
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate risus, eget iaculis sem. Cras sollicitudin maximus arcu et viverra. Integer posuere nibh sapien, vitae semper nulla ultricies vitae. Quisque sapien arcu, lacinia eget fermentum vitae, aliquet quis sem. Nunc quam purus, vulputate et pharetra sit amet, faucibus ac nisl. Donec convallis blandit arcu eget bibendum. Mauris sollicitudin mattis metus, sed auctor nibh. Praesent tincidunt massa feugiat dictum facilisis.'
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
