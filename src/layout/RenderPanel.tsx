import AddComponent from '@/components/AddComponent';
import Render, { RenderProps } from '@/components/Render';
import { useState } from 'react';

const RightPanel = () => {
  const [schema, setSchema] = useState<RenderProps['schema']>([]);

  return (
    <div className="flex-1 bg-brand-grey p-t-0">
      <div className="flex h-8 w-full bg-white b-brand-grey border-l-1 border-r-1 justify-end items-center p-x2">
        <span className=" hover:bg-brand-grey p-1 hover:text-brand-primary cursor-pointer f-center">
          <span className="i-carbon-chart-relationship inline-block text-size-xl "></span>
        </span>
        <span className=" hover:bg-brand-grey p-1 hover:text-brand-primary cursor-pointer f-center">
          <span className="i-material-symbols-code-blocks-outline inline-block text-size-xl "></span>
        </span>
      </div>
      <div className="bg-white h-full overflow-y-auto m-2">
        <Render schema={schema} />
        <AddComponent
          onChange={(atom) => {
            setSchema((previos) => {
              return [...previos, atom];
            });
          }}
        />
      </div>
    </div>
  );
};

export default RightPanel;
