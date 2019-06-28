const resultPersonal = () => import('../components/cards/personal-list/index.vue');
const resultPersonalDesc = () => import('../components/cards/personal-info/index.vue');
const resultRelation = () => import('../components/cards/personal-relation/index.vue');

const resultRegister = () => import('../components/cards/register-list/index.vue');
const resultRegisterDesc = () => import('../components/cards/register-info/index.vue');

const resultEnterprise = () => import('../components/cards/enterprise-list/index.vue');
const resultEnterpriseDesc = () => import('../components/cards/enterprise-info/index.vue');

export const allcards = {
    resultPersonal,
    resultPersonalDesc,
    resultRelation,
    resultRegister,
    resultRegisterDesc,
    resultEnterprise,
    resultEnterpriseDesc
}
export const mapping = {
    'personalList': {
        label: '人员',
        name: 'personalList',
        component: resultPersonal
    },
    'personInfo': {
        label: '人员信息',
        name: 'personInfo',
        component: resultPersonalDesc
    },
    'personalRelation': {
        label: '关系',
        name: 'personalRelation',
        component: resultRelation
    },
    'registerList': {
        label: '户籍',
        name: 'registerList',
        component: resultRegister
    },
    'registerInfo': {
        label: '户籍详情',
        name: 'registerInfo',
        component: resultRegisterDesc
    },
    'enterpriseList': {
        label: '企业',
        name: 'enterpriseList',
        component: resultEnterprise
    },
    'enterpriseInfo': {
        label: '企业信息',
        name: 'enterpriseInfo',
        component: resultEnterpriseDesc
    }
}