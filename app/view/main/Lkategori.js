Ext.define('Inventori.view.main.Lkategori', {
extend: 'Ext.grid.Grid',
    xtype: 'kategorilist',

    requires: [
        'Inventori.store.Liskategori'
    ],

    store: {
        type: 'liskategori'
    },

    columns: [
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: '',  dataIndex: 'id_kategori', hidden:true },
        { text: 'Nama Kategori', dataIndex: 'nama_kategori', width: 200 },
        { text: 'Edit',
            width: 100,
            ignoreExport: true,
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    ui: 'action',
                    bind: '',
                    handler: 'onVerifyTap'
                }

                 }
        },
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
                        Ext.getStore('liskategori').remove(cell);
                        Ext.getStore('liskategori').load();
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
                    placeHolder: 'Nama Kategori',
                    id: 'namacarik',
                    name: 'namacarik',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacarik').getValue();
                            Ext.getStore('liskategori').filter('nama_kategori' , caris);
                        }
                    }   
                },
                {
                    text: ''
                },
                {
                    xtype: 'button',
                    
                    iconCls: 'x-fa fa-plus',
                    text: 'Add',
                    name: 'butadd',
                    handler: function() {
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Tbhkategori',
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
            ]
        }
        ]
});
