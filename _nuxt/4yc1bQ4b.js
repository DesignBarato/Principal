const s=(a,o,t=!1)=>{const e={isExists:"Esta categoria já existe",defaultError:"Houve algum erro ao tentar requisitar",categoryHasExistsName:"Esta categoria já existe",CategoryNotFound:"A categoria não foi encontrada",hasExistsProducts:"É preciso apagar todos os produtos dentro da categoria para apagar.",featureNotFound:"A atualização nao foi encontrada",UserNotFound:"Usuário que você inseriu não foi encontrado",orderHasEnded:"A encomenda já foi finalizada.",couponHasExists:"Este cupom já existe.",endAtInvalid:"A data de vencimento do cupom esta inválida.",couponTypePercentageInvalid:"O tipo da porcentagem esta inválida.",notFoundUser:"O usuário que informou não existe",usersIsEqual:"Você não pode transferir licença para si mesmo",planHasExists:"O plano que você tentou registrar já existe",sellersNotFound:"O id do vendedor é inválido.",productsHasNotExists:"O produto que esta tentando atualizar não existe.",plansIsNotFound:"O plano que esta tentando atualizar não existe.",productHasExists:"O nome do produto já existe",hasExistsMain:"Só pode adicionar somente 1 vendedor principal",NameHasExists:"Nome desse vendedor já existe",notFoundFeature:"A feature requisitada não foi encontrada.",couponHasMaxedOut:"O cupom que informou foi expirado",couponNotFound:"O cupom que informou é inválido"};e[o]||(o="defaultError"),t?a.$toast.update(t,{render:e[o],autoClose:!0,closeOnClick:!0,closeButton:!0,type:"error",isLoading:!1}):a.$toast.error(e[o])};export{s as t};
