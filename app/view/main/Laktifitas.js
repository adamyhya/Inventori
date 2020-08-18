Ext.define('Inventori.view.main.Laktifitas', {
    extend: 'Ext.form.Panel',
    xtype: 'laktifitas',
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
    id: 'laktifitaspanel',
    items:[{
            xtype: 'fieldset',
            id: 'fieldaktif',
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
                 xtype: 'selectfield',
                    label: 'Tahun',
                    id: 'tahun3',   
                    name: 'tahun3',
                    width: 100,
                    valueField: 'tahun',
                    displayField: 'tahun',
                    bind: {
                        store: 'listahunlog'
                    },
                    listeners: {
                        change: function(){
                            thn = Ext.getCmp('tahun3').getValue();
                            store = Ext.getStore('lisbulanlog');
                            store.proxy.extraParams = { tahun : thn };
                            store.load();
                            store1 = Ext.getStore('lisaktifitas');
                            store1.proxy.extraParams = { tahun : thn };
                            store1.load();
                        }
                    }   
                },
                {
                 xtype: 'selectfield',
                    label: 'Bulan',
                    id: 'bulan3',   
                    name: 'bulan3',
                    width: 150,
                    valueField: 'bulan',
                    displayField: 'bulan',
                    bind: {
                        store: 'lisbulanlog'
                    },
                    listeners: {
                        change: function(){
                        bln = Ext.getCmp('bulan3').getValue();
                            Ext.getStore('lisaktifitas').filter({
                                property: 'tgl',
                                value: bln,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    }   
                }
                ]    
                },
                {
                    xtype: 'list',
                    shadow: true,
                    scrollable: true,
                    loadingText: '',
                    reference: 'aktiflis',
                    store: 'lisaktifitas',
                    itemTpl: '<b>{admin}</b> Telah <b>{jenis}</b> {isi} Pada {tgl}'
                }
                


                    ]
    }]
    
});