/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarusett', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarusett',
    
    shadow: true,
    cls: 'demo-solid-background',
    tabBar: {
        layout: {
            pack: 'center'
        }
    },
    activeTab: 1,
    defaults: {
        scrollable: true
    },
    items: [
        {
            title: 'Pengguna',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
               xtype: 'userlist'
             }],
            cls: 'card'
        },
        {
            title: 'Setting',
            iconCls: 'x-fa fa-cogs',
            layout: 'fit',
            items: [{
               //xtype: 'satuanlist'
             }],
            cls: 'card'
        }
    ]
});