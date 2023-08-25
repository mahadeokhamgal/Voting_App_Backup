export default function voterFactory(){
  var factory = {};
  factory.getId = () => {
    return Math.floor(Math.random()*1000);}
  return factory;
}
