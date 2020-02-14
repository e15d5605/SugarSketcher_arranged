/**
 * Author:  Davide Alocci
 * Version: 0.0.1
 */
import Edge from '../../dataStructure/GraphEdge';
import DonorPosition from '../dictionary/DonorPosition';


export default class SubstituentLinkage extends Edge{
    constructor(id,target,source,donorPosition){
        super(id,target,source);

        if(donorPosition instanceof DonorPosition){
            this._donorPosition = donorPosition;
        } else if(typeof donorPosition == 'undefined') {
            this._donorPosition = DonorPosition.UNDEFINED;
        } else {
            throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
        }
    }

    get donorPosition(){
        return this._donorPosition;
    }

    /*
    get linkageType () {
        return this._linkageType;
    }
     */

    set donorPosition(donorPosition){
        if(donorPosition instanceof DonorPosition) {
            this._donorPosition = donorPosition;
        } else {
            throw "The Donor Position must be DonorPosition type. Please use the enum under src/js/glycomics/dictionary/DonorPosition.js";
        }
        return donorPosition;
    }

    /*
    set linkageType (_linkageType) {
        if (_linkageType instanceof LinkageType) {
            this._linkageType = _linkageType;
        } else {
            throw "The Linkage Type must be LinkageType. Please use the enum under src/js/glycomics/dictionary/LinkageType.js";
        }
    }
     */
}
