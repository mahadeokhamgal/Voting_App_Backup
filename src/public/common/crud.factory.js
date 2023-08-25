export default function crudFactory($resource,api){
  return{
    getUser : $resource(api.getUser),
    putUser : $resource(api.postUser,{id:'@id'},{update:{method:'PUT'}}),
    postUser :  $resource(api.postUser),
    getResult : $resource(api.getResult),
    putResult : $resource(api.putResult,{id:'@id'},{update:{method:'PUT'}}),
    getCandidate :$resource(api.getCandidate),
    getParty : $resource(api.getParty),
  }
}
