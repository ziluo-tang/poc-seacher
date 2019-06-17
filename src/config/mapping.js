import resultPersonal from '../components/cards/personal-list/index';
import resultPersonalDesc from '../components/cards/personal-info/index.vue';
import resultRelation from '../components/cards/personal-relation/index';
import resultVehicle from '../components/cards/vehicle/index';
export const allcards = {
    resultPersonal,
    resultPersonalDesc,
    resultRelation,
    resultVehicle

}
export const mapping = {
    'personal-list': {
        label: '人员',
        name: 'personal-list',
        component: resultPersonal
    },
    'personal-info': {
        label: '人员信息',
        name: 'personal-info',
        component: resultPersonalDesc
    },
    'personal-relation': {
        label: '关系',
        name: 'personal-relation',
        component: resultRelation
    },
    'vehicle': {
        label: '车辆',
        name: 'vehicle',
        component: resultVehicle
    }
}