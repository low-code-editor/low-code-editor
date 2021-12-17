/******************************

// LceProp
{
  name: 'href',
  value: 'http://localhost'
}

<!-- Template -->
<a href="http://localhost">
  Link
</a>

------------------------------

// LceProp
{
  name: 'click',
  value: 'run',
  directive: 'on',
  modifiers: ['stop']
}

<!-- Template -->
<button v-on:click.stop="run">
  Vuejs template
</button>

******************************/

export interface LceProp {
  name?: string;
  value?: string;
  directive?: string;
  modifiers?: Array<string>;
}

/******************************

// LceNode
[
  {
    id: 'id-1',
    tag: 'div',
    chileren: [
      {
        id: 'id-2',
        tag: 'span',
        props: [
          {
            name: 'innerText',
            value: '你好'
          }
        ]
      },
      {
        id: 'id-3',
        tag: 'span',
        props: [
          {
            name: 'innerText',
            value: '世界！'
          }
        ]
      },
      {
        id: 'id-4',
        tag: 'span',
        props: [
          {
            name: 'innerText',
            value: 'myVar',
            directive: 'bind'
          }
        ]
      }
    ]
  }
]

<!-- Template -->
<div lce-node-id="id-1">
  <span lce-node-id="id-2">你好</span>
  <span lce-node-id="id-3">世界！</span>
  <span lce-node-id="id-4">{{ myVar }}<span>
</div>

******************************/

export interface LceNode {
  [index: number]: {
    id: string;
    tag: string;
    props?: Array<LceProp>;
    chileren?: Array<LceNode>;
  };
}
