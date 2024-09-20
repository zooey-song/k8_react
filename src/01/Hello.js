function Hello(){
  let today = new Date();
  today = today.toLocaleString();

  let name = 'PNU'
  return (
    <>
    <p className='p1'>hello react</p>
    <p className="text-2xl text-yellow-400">{name === '송소정'? 'PNU' :'pnu송소정'}</p>
    <p className="text-2xl text-yellow-400">
      {new Date().toLocaleDateString()}
    </p>
    <p>{today}
    </p>
    </>
    // jsx문법
    
  );
}

export default Hello;

//js파일명은 첫문자가 대문자로 시작해야한다
//function 안에는 return(하나의 태그)이 있어야 한다. div로 감싸지 않아도 프래그먼트태그라는 태그를 쓴다.
//카멜식 표기법을 따른다.
//<></> fragment tag 을 사용