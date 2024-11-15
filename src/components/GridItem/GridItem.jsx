export const GridItem = ({ children, view }) => {
  return <li className={`${view ? 'h-max' : 'min-h-[375px]'}
  max-w-[297px]
  flex
  flex-col
  items-center
  bg-main-background
  border-4
  border-solid
  border-primary
  rounded-2xl
  overflow-hidden
  p-[5px]
  transition-all
  ease-cubicBezier
  duration-300
  hover:scale-105
  hover:shadow-custom-primary
  focus:scale-105
  focus:shadow-custom-primary
`}>{children}</li>;
};
