import resultPersonal from '../components/cards/personal-list/index';
import resultPersonalDesc from '../components/cards/personal-info/index.vue';
import resultRelation from '../components/cards/personal-relation/index';

import resultRegister from '../components/cards/register-list/index.vue';
import resultRegisterDesc from '../components/cards/register-info/index.vue';

import resultEnterprise from '../components/cards/enterprise-list/index.vue';
import resultEnterpriseDesc from '../components/cards/enterprise-info/index.vue'

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