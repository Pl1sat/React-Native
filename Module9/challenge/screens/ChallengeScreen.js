import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ChallengeScreen = () => {
  const profile = {
    name: 'John Doe',
    role: 'UI/UX Designer',
    description: "We're passionate about creating beautiful designs.",
    avatar: 'https://cdn.dribbble.com/users/2194440/screenshots/6415590/avatars.png',
  };

  const projects = [
    { id: 1, title: 'Learn from Industry Experts', image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*SiM1_ovtlvvQfLdR3mofGw.jpeg' },
    { id: 2, title: 'Portfolio Websites', image: 'https://static.vecteezy.com/system/resources/previews/019/038/910/non_2x/team-of-ux-ui-designer-mobile-development-experience-app-vector.jpg' },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.description}>{profile.description}</Text>
        <TouchableOpacity style={styles.hireButton}>
          <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>

      {/* Projects Section */}
      <View style={styles.projectsSection}>
        <Text style={styles.projectsTitle}>PROJECTS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {projects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <Image source={{ uri: project.image }} style={styles.projectImage} />
              <Text style={styles.projectTitle}>{project.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  hireButton: {
    marginTop: 16,
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  hireButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  projectsSection: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  projectsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  projectCard: {
    marginRight: 16,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
});

export default ChallengeScreen;
