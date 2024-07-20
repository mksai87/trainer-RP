interface prps {
  message: String;
}
function Child({ message }: prps) {
  return (
    <>
      <p>hii ${message}</p>
    </>
  );
}
export default Child;
