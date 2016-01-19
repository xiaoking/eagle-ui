/**
 * Created by mac on 16/1/3.
 */
export default obj=>{

    let getVal= function(vals,val){
        return (vals.join(',')+',').match(val.toLowerCase()+',' )!=null ? val: '';
    };

    let properties={
        //类型
        egType:function(val){
            return getVal(['tacked','justify','success','error','warning','danger','default','normal','simple','form'],val);
        },
        egSize:function(val){
            return getVal(['lg','sm','xs','md'],val);
        },
        egColor:val=>{
            return {color:val}
        },
        egStyle:function(val){
            return getVal(['success','error','warning','danger','default','link','white'],val);
        },
        status:val=>{
            getVal(['diabled','active','enable'],val)
        },
        disabled:true,
        active:true,
        radius:true,
        radiusSize:val=>{
            return {
                WebkitBorderRadius:val,
                borderRadius:val
            }
        },
        round:true,
        classPrefix:val=>{
            return {
                type:'property',
                value:val
            };
        },
        componentTag:val=>{
            return {
                type:'property',
                value:val
            };
        },
        clearfix:true,
        clear:true,
        egHref:true,
        show:true,
        hide:true,
        block:true,
        column:val=>{
            return val;
        },
        zIndex:val=>{
            if(typeof(val) =='string' ){
                return {
                    zIndex:val
                };
            }
            return 'zindex';
        },
        border:val=>{
            if(typeof(val) =='string' ){
                return {
                    border:val
                };
            }
            return  'border';
        },
        padding:val=>{
            if(typeof(val) =='string' ){
                return {
                    padding:val
                };
            }
            return 'padding';
        },
        margin:val=>{
            if(typeof(val) =='string' ){
                return {
                    margin:val
                };
            }
            return 'margin';
        },
        offset:function(val){
            return this.props.egSize+'-offset-'+val;
        }.bind(obj),
        align:function(val){
            return getVal(['center','left','middle','auto','top','right','bottom'],val);
        },
        mode:true,
        params:val=>{
            return {
                type:'property',
                value:val
            };
        },
        icon:val=>{
            return {
                type:'property',
                value:val
            }
        }
    };

    obj.prototype.properties = properties;
}