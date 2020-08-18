Ext.define('Inventori.store.Lisjurusan', {
    extend: 'Ext.data.Store',
    storeId: 'lisjurusan',
    alias: 'store.lisjurusan',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_jurusan', 'nama_jurusan', 'old_nama_jurusan', 'id_user'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apijurusan.php?action=1",
            create: "http://localhost/inventaris/apijurusan.php?action=2",
            destroy: "http://localhost/inventaris/apijurusan.php?action=3",
            update: "http://localhost/inventaris/apijurusan.php?action=4",            
        },
        extraParams: {
        iduser : localStorage.getItem('id_user')
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
