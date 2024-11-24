import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    borderWidth: 2,
    borderColor: '#9C27B0',
    borderRadius: 50,
    padding: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1D1D',
  },
  statLabel: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#1D1D1D',
    borderBottomWidth: 2,
    borderBottomColor: '#9C27B0',
  },
  gridContainer: {
    marginHorizontal:18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width:'49%',
    height: 100,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default styles;
