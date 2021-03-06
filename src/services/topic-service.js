const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001878364/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001878364/topics";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopicById = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

//not mentioned in the rubric, implemented it for future use
export const findAllTopics = () =>
    fetch(TOPICS_URL)
        .then(response => response.json());

export default {
    createTopicForLesson, findTopicsForLesson, updateTopic, deleteTopic, findAllTopics
}