/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('Inventori.view.main.Tabbarusett2', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabbarusett2',
    
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
            title: 'Data Diri',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
                id: 'edtdatadiri',
               xtype: 'edtdatadiri'
             }],
            cls: 'card'
        },
        {
            title: 'Segera Hadir',
            iconCls: 'x-fa fa-question',
            layout: 'fit',
            items: [{
               //xtype: 'satuanlist'
             }],
            cls: 'card'
        }
    ]
});