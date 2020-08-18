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
                    id: 'btnaddktg',
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
                        width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 260,
                        maxHeight: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 220 : 230,
                        styleHtmlContent: true,
                        scrollable: true
                    });
                }

                this.overlay.show();
            }
                },{

                    xtype: 'button',                   
                    iconCls: 'x-fa fa-pencil',
                    id: 'showedtb3',
                    name: 'showedtb3',
                    disabled: true,
                    bind: '',
                    handler: function() {
                    if (!this.overlay) {
                    this.overlay = Ext.Viewport.add({
                        xtype: 'Edtkategori',
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
                record = Ext.getCmp('lkategori').getSelection();  
                Ext.getCmp('id_kategorie').setValue(record.data.id_kategori);
                Ext.getCmp('nama_kategorie').setValue(record.data.nama_kategori);
                Ext.getCmp('old_nama_kategori').setValue(record.data.nama_kategori);
                }
            }

            ]
        }
        ],

    listeners: {
        select: function(){
            Ext.getCmp('showedtb3').setDisabled(false);
        }
    }

});
