import { useState, useRef } from 'react';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catRefs = useRef([]);

  const handleNext = () => {
    const nextIndex = (index + 1) % catList.length;
    setIndex(nextIndex);

    const node = catRefs.current[nextIndex];
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };
  
  return (
    <>
      <nav>
         <button onClick={handleNext}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(el) => catRefs.current[i] = el}
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}

