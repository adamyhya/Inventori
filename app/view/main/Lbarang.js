Ext.define('Inventori.view.main.Lbarang', {
extend: 'Ext.grid.Grid',
alias: 'view.lbarang',
    xtype: 'baranglist',
    id: 'grid',
    requires: [
        'Inventori.store.Lisbarang'
    ],

    store: {
        type: 'lisbarang'
    },

    columns: [
        { text: '', dataIndex: 'id_barang', hidden: true },
        { text: 'No', dataIndex: 'nomor', width: 55 },
        { text: 'Nama Barang',  dataIndex: 'nama_barang', width: 230 },
        { text: 'Kategori', dataIndex: 'nama_kategori', width: 120 },
        { text: 'Jumlah', dataIndex: 'jumlah_barang', width: 120 },
        { text: 'Satuan', dataIndex: 'nama_satuan', width: 120 },
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
                    handler: function(btn) {
                        record = btn.getParent();
                        cell = record.getRecord();
                        Ext.getStore('lisbarang').remove(cell);
                        Ext.getStore('lisbarang').load();
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
                    placeHolder: 'Nama Barang',
                    id: 'namacari',
                    name: 'namacari',
                    iconCls: 'x-fa fa-search',
                    listeners: {
                        change: function(){
                            caris = Ext.getCmp('namacari').getValue();
                            Ext.getStore('lisbarang').filter('nama_barang' , caris);
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
                        xtype: 'Tbhbarang',
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
        ],

    listeners: {
        //select: 'delBarang'
    }
});
