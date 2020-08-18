Ext.define('Inventori.view.main.Lnotif', {
    extend: 'Ext.form.Panel',
    xtype: 'lnotif',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Inventori.view.main.MainController',
        'Inventori.view.main.MainModel'
    ],
      controller: 'main',
    viewModel: 'main',
    shadow: true,

    cls: 'demo-solid-background',
    id: 'lnotifpanel',
    items:[{
            xtype: 'fieldset',
            id: 'fieldnotif',
            title: '',
            scrollable: true,
            default:{
                labelWidth: '35%'
            },
            items: [
                {
                xtype: 'toolbar',
                docked: 'top',
                items:[
                {
                 xtype: 'textfield',
                    id: 'id_notif',
                    name: 'id_notif',
                    bind: '{notiflis.selection.id_notif}',
                    hidden: true,
                    listeners: {
                        change: function(){
                            idn = Ext.getCmp('id_notif').getValue();
                            store = Ext.getStore('readnotif');
                            store.proxy.extraParams = {id_notif: idn};
                            store.load();
                        }
                    }       
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-check',
                    text: 'Tandai Semua',
                    name: 'butadd',
                    id: 'buttonadd2121',
                    handler: function(){
                            store = Ext.getStore('readnotif');
                            store.proxy.extraParams = {action: '3', iduser: localStorage.getItem('id_user')};
                            store.load();
                    }
                }
                ]    
                },
                {
                    xtype: 'list',
                    shadow: true,
                    scrollable: true,
                    loadingText: '',
                    reference: 'notiflis',
                    store: 'lisnotif',
                    itemTpl: '<b>{admin}</b> Telah <b>{jenis}</b> {isi} Pada {tgl} ID : {id_notif}',
                    
                        
                    }
                


                    ]
    }]
    
});