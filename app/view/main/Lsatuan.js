Ext.define('Inventori.view.main.Lsatuan', {
extend: 'Ext.grid.Grid',
    xtype: 'satuanlist',

    requires: [
        'Inventori.store.Lissatuan'
    ],

    store: {
        type: 'lissatuan'
    },

    columns: [
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: '',  dataIndex: 'id_satuan', hidden:true },
        { text: 'Nama Satuan', dataIndex: 'nama_satuan', width: 200 },
        { text: 'Hapus',
            width: 100,
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-trash-o',
                    ui: 'action',
                    bind: '',
                    handler: function(btn) {
                        record = btn.getParent();
                        cell = record.getRecord();
                        Ext.getStore('lissatuan').remove(cell);
                        Ext.getStore('lissatuan').load();
                    }
                }

                 }
        }
        
    ],
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'searchfield',
                    placeHolder: 'Nama Satuan',
                    id: 'namacarisa',
                    name: 'namacarisa',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacarisa').getValue();
                            Ext.getStore('lissatuan').filter('nama_satuan' , caris);
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    name: 'butadd',
                    handler: function() {
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhsatuan',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 600,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 600,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }

                this.overlay.show();
            }
                },
                {
                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb4',
                    name: 'showedtb4',
                    disabled: true,
                    bind: '',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtsatuan',
                        floated: true,
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation: {
                            type: 'popIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'popOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        centered: true,
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 340,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 430,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }
                this.overlay.show();
                record = Ext.getCmp('lsatuan').getSelection();  
                Ext.getCmp('id_satuane').setValue(record.data.id_satuan);
                Ext.getCmp('nama_satuane').setValue(record.data.nama_satuan);
                }
            }
            ]
        }
        ],

    listeners: {
        select: function(){
            Ext.getCmp('showedtb4').setDisabled(false);
        }
    }


});
