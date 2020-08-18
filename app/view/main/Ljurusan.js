Ext.define('Inventori.view.main.Ljurusan', {
extend: 'Ext.grid.Grid',
alias: 'view.ljurusan',
    xtype: 'jurusanlist',
    requires: [
        'Inventori.store.Lisjurusan'
    ],

    store: {
        type: 'lisjurusan'
    },

    columns: [
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: '',  dataIndex: 'id_jurusan', hidden:true },
        { text: 'Nama Jurusan', dataIndex: 'nama_jurusan', width: 200 },
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
                        Ext.getStore('lisjurusan').remove(cell);
                        Ext.getStore('lisjurusan').load();
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
                    placeHolder: 'Nama Jurusan',
                    id: 'namacarij',
                    name: 'namacarij',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacarij').getValue();
                            Ext.getStore('lisjurusan').filter('nama_jurusan' , caris);
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    id:'btnaddjrs',
                    name: 'butadd6',
                    handler: function() {
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhjurusan',
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
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 260,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 220,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }

                this.overlay.show();
            }
                },{

                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb5',
                    name: 'showedtb5',
                    disabled: true,
                    bind: '',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtjurusan',
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
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 260,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 230,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }
                this.overlay.show();
                record = Ext.getCmp('ljurusan').getSelection();  
                Ext.getCmp('id_jurusane').setValue(record.data.id_jurusan);
                Ext.getCmp('nama_jurusane').setValue(record.data.nama_jurusan);
                Ext.getCmp('old_namaj').setValue(record.data.nama_jurusan);
                }
            }

            ]
        }
        ],

    listeners: {
        select: function(){
            Ext.getCmp('showedtb5').setDisabled(false);
        }
    }
});
