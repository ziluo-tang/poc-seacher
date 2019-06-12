import resultPersonal from '../components/cards/personal/index';
import resultPersonalDesc from '../components/cards/personalDesc/index.vue';
import resultRelation from '../components/cards/personal-relation/index';
import resultVehicle from '../components/cards/vehicle/index';
export const allcards = {
    resultPersonal,
    resultPersonalDesc,
    resultRelation,
    resultVehicle

}
export const mapping = {
    'personal': {
        label: '人员',
        name: 'personal',
        component: resultPersonal
    },
    'personalDesc': {
        label: '人员信息',
        name: 'personalDesc',
        component: resultPersonalDesc
    },
    'relation': {
        label: '关系',
        name: 'relation',
        component: resultRelation
    },
    'vehicle': {
        label: '车辆',
        name: 'vehicle',
        component: resultVehicle
    }
}