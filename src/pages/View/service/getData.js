import axios from 'axios';
axios.defaults.withCredentials = true;

export const getList_all = ()=>axios.post('/openApi/ai-search/version1.0/rule/list_all',{}).then((res)=>{
  return res.data;
})
export const add_New = (ruleName,author,ruleContent)=>axios.post('/openApi/ai-search/version1.0/rule/add',{ruleName,author,ruleContent}).then((res)=>{
  return res.data;
})
export const update_data = (ruleName,ruleContent,ruleId)=>axios.post('/openApi/ai-search/version1.0/rule/update',{ruleName,ruleContent,ruleId}).then((res)=>{
  return res.data;
})
export const delete_data = (ruleId)=>axios.post('/openApi/ai-search/version1.0/rule/delete',{ruleId}).then((res)=>{
  return res.data;
})
export const testNode = (data)=>axios.post('/openApi/aiSearch/patternMatch',{data}).then((res)=>{
  return res.data;
})
export const exportText =(filePath)=>axios.post('/openApi/ai-search/version1.0/rule/save_file',{filePath}).then((res)=>{
  return res.data
})
