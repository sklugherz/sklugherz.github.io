
import { ref } from 'vue';


const projects = ref([
    {title: 'project 1', desc: 'hello world', img:'', selected: true}, 
    {title: 'project 2', desc: 'hello world', img:'', selected: false}
    ]);
    //{title: '', desc: '', img:'', selected: false}

export default projects;